class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class FarizahWasHere extends HTMLElement{
	connectedCallback(){
		this.innerHTML = "Farizah was here";
	}
}

customElements.define("x-farizah", FarizahWasHere)

class TwoSidedMarket extends HTMLElement{
	connectedCallback(){
		this.innerHTML = `<a href="side-a">Side A</a>&nbsp;<a href="side-b">Side B</a>`;
	}
}

customElements.define("x-twosided", TwoSidedMarket);

class Products extends HTMLElement{
	connectedCallback(){
		this.innerHTML = `<a href="products">Products</products>&nbsp`;
	}
}

customElements.define("x-products", Products)

class Email extends HTMLElement{
	connectedCallback(){
		this.innerHTML = `<a href="mailto:farizahnaeem07@gmail.com" class="gmail-link">farizahnaeem07@gmail.com</a>`;
	}
}

customElements.define("x-email", Email)


class PhoneNumber extends HTMLElement{
	connectedCallback(){
		this.innerHTML = `<a href="tel:6477600155" class="phone-link">6477600155</a>`;
	}
}

customElements.define("x-phone", PhoneNumber)

class Instagram extends HTMLElement{
	connectedCallback(){
		this.innerHTML = `<a href="https://www.instagram.com/theflowergirl.07/" class="instagram-link">theflowergirl.07</a>`;
	}
}

customElements.define("x-instagram", Instagram)


