import { ArrowDown, ArrowRight } from 'lucide-react'

const ContactBtn = () => {
  return(

  <div className=" bg-primary/100 hover:translate-y-1 transition-all duration-300 w-min p-3 rounded-full shadow-2xl">
    <button 
     onClick={()=>{
      const element = document.getElementById('Contact');
      element?.scrollIntoView({
      behavior:'smooth'
      })
    }}
    className="text-secondary flex  justify-center items-center">
    <h1>Contact</h1>
      <ArrowDown className="text-4xl hover:translate-y-2  transition-all duration-300"/>
    </button>
  </div>
  ) 
};

export default ContactBtn;