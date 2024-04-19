class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class TwoSidedMarket extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<a href="side-a" class="btn">Side A</a>&nbsp;<a href="side-b" class="btn">Side B</a>`;
    }
}

customElements.define("x-twosides", TwoSidedMarket);