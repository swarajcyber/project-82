var mouseEvent="empty"
var last_position_of_y,last_position_of_x
color="red"
width_of_line=5
radius=10
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown (e){
mouseEvent="mousedown"
color=document.getElementById("color").value
width_of_line=document.getElementById("width").value
radius=document.getElementById("radius").value
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    current_postion_of_mouse_x=e.cliectX-canvas.offsideleft
    current_postion_of_mouse_y=e.cliectY-canvas.offsidetop
    if (mouseEvent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=width_of_line
        ctx.arc(current_postion_of_mouse_x,current_postion_of_mouse_y,radius,0,2*Math.PI)
        ctx.stroke()
    }
}