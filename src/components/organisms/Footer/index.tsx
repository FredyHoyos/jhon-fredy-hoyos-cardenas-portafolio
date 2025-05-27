import React from 'react'

const index = () => {
  return (
    <div>
        <footer className="backdrop-blur-sm bg-white/20 border-white/20 shadow-lg text-black py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">© {new Date().getFullYear()} Jhon Fredy Hoyos Cárdenas.</p>
                <p className="text-xs mt-2">
                Hecho con <span className="inline-block animate-bounce">❤️</span> por Jhon Fredy Hoyos Cárdenas
                </p>            
            </div>
        </footer>
    </div>
  )
}

export default index