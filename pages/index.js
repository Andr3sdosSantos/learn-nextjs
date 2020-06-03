export default function Home() {
  return (
    <>
      <header>
        <h1><span>Seed's</span> "mid tiar" softwares</h1>
      </header>
      <main>
        <div className="content">
          <h1>Hi! I'm <span>Seed's</span> softwares, how are you doing?</h1>
          <input className="emotion" type="text"/>
          <button onClick="alert()">Send an emotion</button>
        </div>
      </main>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Poppins:200&display=swap');      
      
        header {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 70px;
          box-shadow: 1px 1px 5px rgba(55, 20, 80, .2);
          font-family: 'Poppins', sans-serif;
          font-weight: 200;
        }
        span {
          color: #2873eb;
        }
        main {
          widht: 90%;
          max-width: 900px;
          margin: 80px auto;
          display: flex;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        main .content .emotion {
          width: 100%;
          height: 50px;
          border: none;
          border-bottom: 1px solid #2873eb;
        }
        main .content .emotion:active {
          border: none;
        }
        main .content button {
          width: 100%;
          height: 50px;
          margin-top: 20px;
          font-family: 'Poppins', sans-serif;
          font-weight: bold;
          background: none;
          border: 1px solid #2873eb;
          cursor: pointer;
          transition: all 400ms;
        }
        main .content button:hover {
          background-color: #2873eb;
          color: #ffffff;
          border: none;
        }
      `}</style>
      <script>
        {
          function alert() {
            addEventListener(alert('Ok! Então vamos lá...'))
          }
        }
      </script>
    </>
  )
}