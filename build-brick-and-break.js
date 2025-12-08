export function build(arg){
    let count = 1
    const interval = setInterval(() => {
        if (count > arg){
            clearInterval(interval)
            return
        }
        const brick = document.createElement("div")
        brick.setAttribute("id", `brick-${count}`)

        if (count % 3 === 2){
            brick.dataset.foundation = true
        } 

        document.body.append(brick)
        count ++
    }, 100)
}

export function repair(...ids){
    ids.map( id => {
        const brick = document.getElementById(id)
        if (brick.hasAttribute("data-foundation")){
            brick.dataset.repaired = "in progress"
        }else {
            brick.dataset.repaired = true
        }
    })
}

export function destroy(){
    document.body.lastElementChild.remove()
}