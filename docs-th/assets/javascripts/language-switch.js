(() => {
  const ROOT="/KIDzUIx3/";
  const TH="/KIDzUIx3/th/";
  const thai=()=>location.pathname.startsWith(TH);

  function asset(name){
    return (thai()?TH:ROOT)+"assets/icons/"+name;
  }

  function page(lang){
    let p=location.pathname;
    if(lang==="th"&&!p.startsWith(TH)){
      p=TH+(p.startsWith(ROOT)?p.slice(ROOT.length):p.replace(/^\/+/,""));
    }
    if(lang==="en"&&p.startsWith(TH)){
      p=ROOT+p.slice(TH.length);
    }
    return p+location.search+location.hash;
  }

  function removeNativeLanguageSelectors(){
    document.querySelectorAll(".md-select").forEach(el=>{
      if(el.querySelector('a[hreflang="en"],a[hreflang="th"]')) el.remove();
    });
  }

  function selector(){
    removeNativeLanguageSelectors();

    document.querySelectorAll(".kidz-lang-switch").forEach((el,i)=>{
      if(i>0) el.remove();
    });
    if(document.querySelector(".kidz-lang-switch")) return;

    const header=document.querySelector(".md-header__inner");
    if(!header) return;

    const wrap=document.createElement("div");
    wrap.className="kidz-lang-switch";

    const btn=document.createElement("button");
    btn.type="button";
    btn.className="kidz-lang-current";
    btn.setAttribute("aria-haspopup","menu");
    btn.setAttribute("aria-expanded","false");
    btn.innerHTML=thai()
      ? `<img src="${asset("flag-th.svg")}" alt=""><b>TH</b><svg class="kidz-chevron" viewBox="0 0 20 20" aria-hidden="true"><path d="m5.5 7.5 4.5 4.5 4.5-4.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`
      : `<img src="${asset("flag-us.svg")}" alt=""><b>EN</b><svg class="kidz-chevron" viewBox="0 0 20 20" aria-hidden="true"><path d="m5.5 7.5 4.5 4.5 4.5-4.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

    const menu=document.createElement("div");
    menu.className="kidz-lang-menu";
    menu.setAttribute("role","menu");

    const check=`<svg class="kidz-lang-check" viewBox="0 0 20 20" aria-hidden="true"><path d="m4.5 10.3 3.2 3.2 7.8-8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

    menu.innerHTML=`
      <a role="menuitem" class="${thai()?"":"is-active"}" href="${page("en")}">
        <img src="${asset("flag-us.svg")}" alt="">
        <span class="kidz-lang-copy"><b>EN</b><small>English</small></span>
        ${thai()?"":check}
      </a>
      <a role="menuitem" class="${thai()?"is-active":""}" href="${page("th")}">
        <img src="${asset("flag-th.svg")}" alt="">
        <span class="kidz-lang-copy"><b>TH</b><small>ภาษาไทย</small></span>
        ${thai()?check:""}
      </a>`;

    btn.addEventListener("click",e=>{
      e.stopPropagation();
      const open=wrap.classList.toggle("is-open");
      btn.setAttribute("aria-expanded",open?"true":"false");
    });

    menu.addEventListener("click",e=>e.stopPropagation());

    document.addEventListener("click",()=>{
      wrap.classList.remove("is-open");
      btn.setAttribute("aria-expanded","false");
    });

    document.addEventListener("keydown",e=>{
      if(e.key==="Escape"){
        wrap.classList.remove("is-open");
        btn.setAttribute("aria-expanded","false");
      }
    });

    wrap.append(btn,menu);

    const search=header.querySelector(".md-search");
    search?header.insertBefore(wrap,search):header.appendChild(wrap);
  }

  function localizeThaiUI(){
    if(!thai()) return;
    document.documentElement.lang="th";

    document.querySelectorAll('input[placeholder]').forEach(el=>{
      if(/search/i.test(el.placeholder)) el.placeholder="ค้นหา";
    });

    const map={
      "Search":"ค้นหา",
      "Search this site":"ค้นหาในเว็บไซต์",
      "Back to top":"กลับขึ้นด้านบน",
      "Edit this page":"แก้ไขหน้านี้",
      "View source of this page":"ดูซอร์สของหน้านี้",
      "Table of contents":"สารบัญ",
      "Previous":"ก่อนหน้า",
      "Next":"ถัดไป",
      "Getting Started":"เริ่มต้นใช้งาน",
      "Components":"คอมโพเนนต์",
      "Creating Components":"การสร้างคอมโพเนนต์",
      "Creating Themes & Accents":"การสร้างธีมและ Accent"
    };

    document.querySelectorAll("[aria-label]").forEach(el=>{
      const a=el.getAttribute("aria-label");
      if(map[a]) el.setAttribute("aria-label",map[a]);
    });

    document.querySelectorAll("a,button,span").forEach(el=>{
      if(el.children.length) return;
      const t=el.textContent.trim();
      if(map[t]) el.textContent=map[t];
    });
  }

  function init(){
    removeNativeLanguageSelectors();
    selector();
    localizeThaiUI();
  }

  if(window.document$?.subscribe) window.document$.subscribe(init);
  else document.addEventListener("DOMContentLoaded",init);

  setTimeout(init,500);
})();