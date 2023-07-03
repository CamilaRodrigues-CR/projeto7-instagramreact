import { useState } from "react"

function Post(props) {

  const [salvo, setSalvo] = useState(false);
  const [curtido, setCurtido] = useState(false);
  const [numeroCurtida, setNumeroCurtida] = useState(props.numeroC);

  function savePost(){
    if (!salvo) {
      setSalvo(true);
    } else{
      setSalvo(false);
    }
  }

  function likePost(){
    if (!curtido) {
      setCurtido(true);
      setNumeroCurtida(numeroCurtida + 1);
    } else{
      setCurtido(false);
      setNumeroCurtida(numeroCurtida - 1);
    }
  }

  function like(){
    if (!curtido) {
      setCurtido(true);
      setNumeroCurtida(numeroCurtida + 1);
    } 
  }

  return (
    <div className="post" data-test="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.imagemT} alt={props.nomeT} />
          {props.nomeT}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img data-test="post-image" onClick={like} src={props.imagemP} alt={props.nomeP} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
          {
              !curtido ?
                <ion-icon data-test="like-post" onClick={likePost} name="heart-outline"></ion-icon>
                :
                <ion-icon data-test="like-post" onClick={likePost} name="heart" class="vermelho"></ion-icon>
            }

            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            {
              !salvo ?
                <ion-icon data-test="save-post" onClick={savePost} name="bookmark-outline"></ion-icon>
                :
                <ion-icon data-test="save-post" onClick={savePost} name="bookmark"></ion-icon>
            }

          </div>
        </div>

        <div className="curtidas">
          <img src={props.imagemC} alt={props.nomeC} />
          <div className="texto" data-test="likes-number">
            Curtido por <strong>{props.nomeC}</strong> e <strong>outras {numeroCurtida} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function Posts() {

  const posts = [
    {
      imagemT: "assets/img/meowed.svg", nomeT: "meowed",
      imagemP: "assets/img/gato-telefone.svg", nomeP: "gato-telefone",
      imagemC: "assets/img/respondeai.svg", nomeC: "respondeai", numeroC: 152
    },

    {
      imagemT: "assets/img/barked.svg", nomeT: "barked",
      imagemP: "assets/img/dog.svg", nomeP: "dog",
      imagemC: "assets/img/adorable_animals.svg", nomeC: "adorable_animals", numeroC: 976
    },

  ]

  return (
    <>
      <div className="posts">
        {posts.map((p) => <Post key={p.imagemT}
          imagemT={p.imagemT} nomeT={p.nomeT}
          imagemP={p.imagemP} nomeP={p.nomeP}
          imagemC={p.imagemC} nomeC={p.nomeC} numeroC={p.numeroC}
        />)}

      </div>
    </>
  )
}