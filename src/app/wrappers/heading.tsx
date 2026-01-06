"use client"
interface HeadingProps {
  children: React.ReactNode;
  
}
export default function Heading({children}:HeadingProps){
    return( 
        <div className="text-center text-xl md:text-5xl font-bold bg-[linear-gradient(20deg,#ffffff_0%,rgba(255,255,255,0)_110%)] bg-clip-text text-transparent font-mona ">
            {children}
        </div>
    )
    
}