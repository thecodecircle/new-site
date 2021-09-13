import { Controller } from "stimulus"
export default class extends Controller {
  static targets = ['']
    connect(){
    document.querySelectorAll("code").forEach(element => {
        element.addEventListener("click", event => {
            navigator.clipboard.writeText(element.innerText)
            
            element.classList.add('copied')
            setTimeout(() => {
                element.classList.remove('copied')
                
            }, 1000);
        })
    })
    }
}
