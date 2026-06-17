const toggle=document.querySelector('.mobile-toggle');
const nav=document.querySelector('.nav-links');
if(toggle){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}

document.querySelectorAll('form').forEach(form=>{
  form.addEventListener('submit',e=>{
    const msg=form.querySelector('.submit-msg');
    if(msg){msg.style.display='block';}
    if(form.classList.contains('valuation-form')){
      e.preventDefault();
      const result=form.querySelector('.valuation-result');
      if(result){result.style.display='block';}
    }
  });
});
