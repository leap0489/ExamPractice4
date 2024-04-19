class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class TwoSidedMarket extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<a href="sell" class="btn">Become a merchant</a>&nbsp;<a href="volunteer" class="btn">Become a volunteer</a>`;
    }
}

customElements.define("x-twosides", TwoSidedMarket);