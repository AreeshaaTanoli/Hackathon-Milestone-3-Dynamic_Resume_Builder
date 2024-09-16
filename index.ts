const resumeForm = document.getElementById('resumeForm') as HTMLInputElement|null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLInputElement|null;

// function to generate the resume
if (resumeForm && resumeOutput){
resumeForm.addEventListener('submit',(event)=>{
    event.preventDefault();

    const name=(document.getElementById('name')as HTMLInputElement).value;
    const email=(document.getElementById('email')as HTMLInputElement).value;
    const phone=(document.getElementById('phone')as HTMLInputElement).value;
    const education=(document.getElementById('education')as HTMLInputElement).value;
    const experience=(document.getElementById('experience')as HTMLInputElement).value;
    const skills=(document.getElementById('skills')as HTMLInputElement).value;
    const description=(document.getElementById('description')as HTMLInputElement).value;

    // Generate HTML for the resume
    const resumeHTML =`
    <h2>Generated Resume</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Education:</strong> ${education}</p>
    <p><strong>Experience:</strong> ${experience}</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Description:</strong> ${description}</p>
    
    `;
    resumeOutput.innerHTML=resumeHTML;
});
  }else{
    console.log('Form or output div not found in the DOM!');
    
  }


  