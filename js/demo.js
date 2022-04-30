var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("test").innerHTML = xhr.response
    }
}
xhr.open("GET","./info.json",true)
xhr.send()