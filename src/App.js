import './style.scss';
import html from './assets/HTML.png'
import css from './assets/css.png'
import js from './assets/JS.png'
import python from './assets/PYTHON.png'
import foto from './assets/Eu.png'

function App() {
  return (
    <body>
      
      <header>
        <nav>

          <div className='title'>
            <h1>Dev.FERNANDO</h1>
          </div>

          <div className='small-icons'>
            <a href="https://github.com/FernandoSFurtado" target="_blank" rel="noreferrer">
              <i className='fa-brands fa-github fa-2x'></i>
            </a>
            <a href="https://www.linkedin.com/in/fernando-silva-furtado-127230210/" target="_blank" rel="noreferrer">
              <i className='fa-brands fa-linkedin fa-2x'></i>
            </a>
            <a href="https://www.instagram.com/fernandosilvafurtado/" target="_blank" rel="noreferrer">
              <i className='fa-brands fa-instagram fa-2x'></i>
            </a>
          </div>

          <div className='icons'>
            <a href="https://github.com/FernandoSFurtado" target="_blank" rel="noreferrer">
              <i className='fa-brands fa-github fa-2x'></i>
            </a>
            <a href="https://www.linkedin.com/in/fernando-silva-furtado-127230210/" target="_blank" rel="noreferrer">
              <i className='fa-brands fa-linkedin fa-2x'></i>
            </a>
            <a href="https://www.instagram.com/fernandosilvafurtado/" target="_blank" rel="noreferrer">
              <i className='fa-brands fa-instagram fa-2x'></i>
            </a>
          </div>

        </nav>
      </header>

      <main>
        <section className='main-content'>
          <article className='text'>
            <h2>🙋‍♂️ Sobre mim</h2>
            <p>
              Olá, me chamo Fernando Silva Furtado, tenho 28 anos e sou de São Paulo, Brasil.
              Cursando Analise e desenvolvimento de sistemas (UNIP).
              Apaixonado por desenvolvimento de softwares, estudo programação desde os 25 anos, com ênfase em desenvolvimento web e com Python.
            </p>
          </article>
          <aside className='techs'>
            <h2>👨‍💻 Tecnologias</h2>
            <div className='card-container'>
              <div className='row1'>
                <div className='card '>
                  <img 
                    src={ html }
                    alt='Logo do HTML5'
                  />
                </div>
                <div className='card'>
                  <img 
                    src={ css }
                    alt='Logo do CSS3'
                  />
                </div>
              </div>
              <div className='row2'>
                <div className='card'>
                  <img 
                    src={ js }
                    alt='Logo do JavaScript'
                  />
                </div>
                <div className='card'>
                  <img 
                    src={ python }
                    alt='Logo do Python'
                  />
                </div>
              </div>
            </div>
          </aside>
        </section>

        <figure>
          <img 
            src={ foto }
            alt='Imagem de Fernando Furtado'
          />
          <figcaption>Fernando Silva Furtado</figcaption>
        </figure>

      </main>

      <footer>
        <span>
          &copy; Fernando Silva Furtado, 2024 - Todos os direitos reservados.
        </span>
      </footer>

    </body>
  );
}

export default App;
