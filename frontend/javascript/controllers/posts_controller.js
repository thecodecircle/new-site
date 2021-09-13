import { Controller } from "stimulus"
export default class extends Controller {
  static targets = ['toast']
    connect(){
    document.querySelectorAll("code").forEach(element => {
        element.addEventListener("click", event => {
            // element.select()
            // element.setSelectionRange(0, 99999)
            navigator.clipboard.writeText(element.innerText)
            
            this.toastTarget.classList.add("show")
            setTimeout(() => {
                this.toastTarget.classList.remove("show")
                
            }, 1000);
        })
    })
    }
}
