// import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';

import imagenRegistro from './images/imagenRegister.svg'
import LogoMain from './images/logo_dos.svg';
import imgGoogle from './images/Google.png'
import profileIcon from './images/profile.png'
import emailIcon from './images/@.png'
import passwordIcon from './images/lock1.png'

function App() {
  return (
    <div className="App">
      <Hero/>

      <div className="RegisterContainerGeneral">
        <div className='Register'>
          <div className='ContainerFormulario'>
            <div className='EncabezadoFormulario'>
              <img src={LogoMain} alt="" className='logoFormulario'/>
              <p className='titleg'>Welcome</p>
              <p className='titleh'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
            </div>
            <div >
              <form action="#" className='FormularioRegistro'>
                <fieldset className='innerFormulario'>
                  <legend>Name</legend>
                    <input type="text" className='inputs'/>
                    <img src={profileIcon} alt="" className='icon'/>
                </fieldset>

                <fieldset className='innerFormulario'>
                  <legend>Email</legend>
                    <input type="email" className='inputs'/>
                    <img src={emailIcon} alt="" className='icon'/>
                </fieldset>
                
                <fieldset className='innerFormulario'>
                  <legend>Password</legend>
                    <input type="password" className='inputs'/>
                    <img src={passwordIcon} alt="" className='icon'/>
                </fieldset>

                <fieldset className='innerFormulario'>
                  <legend>Confirm Password</legend>
                    <input type="password" className='inputs'/>
                    <img src={passwordIcon} alt="" className='icon'/>
                </fieldset>

                <label className='pSendNotif'>
                  <input type="checkbox"  className='checkSendNotif'/>
                  Send me a notification to my email
                </label>
                <input type="submit" value="Sign up" className='SignUpButton'/>
                <button type='button' className='buttonSignGoogle'>
                  <img src={imgGoogle} alt="" />
                  <p className='pGoogle'>Sign with Google</p>
                </button>
              </form>
            </div>
            <div>
              <p className='pAlredyAccount'>Already have an account? <a>Log in</a></p>
              <p className='pAlredyAccount'>Go back to <a>home page</a></p>
            </div>
          </div>
        </div>
        <div className='ImagenRegister'>
          <img src={imagenRegistro} alt="imagenRegistro" className='imagenTotoro'/>
        </div>
      </div>
    </div>
  );
}

export default App;
