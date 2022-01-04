var h=document.createElement('h1')
h.setAttribute("id","title")
h.classList.add("text-center")
h.innerText="Dictionary"
document.body.append(h)


var div1=document.createElement('div')
div1.classList.add('container')
document.body.appendChild(div1)


var row=document.createElement('div')
row.classList.add('row')
div1.appendChild(row)


var txt=document.createElement('input')
txt.setAttribute("id","txt1")
txt.classList.add('my-3','py-2')
txt.setAttribute("type","text")
row.append(txt)

var a=document.getElementById("txt1").value

var srch=document.createElement("button")
srch.classList.add("btn","btn-primary")
srch.setAttribute("onclick","func()")
srch.innerHTML="Search"
row.append(srch)





function func()
{
    let val=document.getElementById('txt1').value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`).then((d)=>{
    return(d.json())
}).then((dat)=>{
    console.log(dat)
    let col=document.createElement('div')
    col.setAttribute('id','colu')
col.classList.add('column','m-1','mx-auto','rounded-2','col-xl-6','col-lg-6','col-md-8','col-sm-10','px-4','py-4')
 row.appendChild(col)
 let head=document.createElement('div')
 head.classList.add('text-center','h3')
 head.innerHTML=`${dat[0].word.toUpperCase()}`
 col.appendChild(head)
 let mean=dat[0].meanings.length
 for(let i=0;i<mean;i++){
 let div1=document.createElement('div')
 div1.innerHTML=`Part Of Speech:<b>
${dat[0].meanings[i].partOfSpeech}</b>`
 let def=document.createElement('div')
 let def_len=(dat[0].meanings[i].definitions).length
 if(def_len>=0 && def_len<=4){
 for(let k=0;k<def_len;k++){
 let sub_div = document.createElement('div')

sub_div.innerHTML=`-${dat[0].meanings[i].definitions[k].definition}<br>`
 div1.appendChild(sub_div)
 }
 }
 if(def_len>=5){
 for(let j=0;j<5;j++){
 let sub_div = document.createElement('div')

sub_div.innerHTML=`-${dat[0].meanings[i].definitions[j].definition}<br>`
 div1.appendChild(sub_div)
 }
 }
 col.appendChild(div1)
 div1.appendChild(def)
 }
}).catch((er)=>{
    console.log('er')
})
}

