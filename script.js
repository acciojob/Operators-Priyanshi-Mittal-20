//your JS code here. If required.
function handleOperation(e)
{
	e.preventDefault()
	let n1=document.getElementById("num1")
	let n2=document.getElementById("num2")
	let num1=n1.value
	let num2=n2.value
	let op=document.getElementById("operator").value
	let result=document.getElementById("result")
	if(op=="+")
	{
		 result.innerText=Number(num1)+Number(num2)
	}
	else if(op=="-")
	{
		 result.innerText=Number(num1)-Number(num2)
	}
	else if(op=="*")
	{
		result.innerText=Number(num1)*Number(num2)
	}
	else if(op=="/")
	{
		result.innerText=Number(num1)/Number(num2)
	}
	else if(op=="%")
	{
		result.innerText=Number(num1)%Number(num2)
	}
}

function handleChange(e)
{
	e.preventDefault()
	let text=document.getElementsByClassName("division")
	text[0].innerText="Bye"
	text[1].innerText="Good Bye"
	text[2].innerText="To"
	text[3].innerText="Your"
	text[4].innerText="Class"
}