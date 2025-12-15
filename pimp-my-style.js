export const styles = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
]

let count = 0
export function pimp(){
    const button = document.querySelector("button")
    if (!button.classList.contains("unpimp")){
        button.classList.add(styles[count])
        count +=1
        if (count === styles.length){
            button.classList.toggle("unpimp")
        }
    }else{
        count -=1
        button.classList.remove(styles[count])
        if (count === 0){
            button.classList.toggle("unpimp")
        }    
    }
    
}