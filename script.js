function example(text){
    document.getElementById("input").value=text;
}

async function translate(){

let input=document.getElementById("input").value;

document.getElementById("output").innerHTML=
"Lucas is thinking very carefully about what each word means...";

const response=await fetch(
"https://openrouter.ai/api/v1/chat/completions",
{
method:"POST",
headers:{
"Authorization":"Bearer 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",
"Content-Type":"application/json"
},
body:JSON.stringify({

model:"google/gemini-2.5-flash",

messages:[
{
role:"system",
content:`
You are Translate to Lucas.

Your purpose is to convert normal English into terms Lucas can understand.

Lucas takes everything literally and misses jokes and implied meaning.

Rules:

- Explain every object and concept.
- Be ridiculously over-detailed.
- Explain cause and effect.
- Expand simple ideas into long explanations.
- Never be insulting.
- Sound scientific and serious.
- Output ONLY the translated text.

Example:

Input:
That ball is bouncy.

Output:
The spherical object in front of you is made of a flexible material that temporarily compresses when it collides with a solid surface and then returns to its original shape...
`
},
{
role:"user",
content:input
}
]

})
});

const data=await response.json();

document.getElementById("output").innerHTML=
data.choices[0].message.content;

}
window.translate = translate;
window.example = example;