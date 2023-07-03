import { useState } from "react"

export default function User() {

  const [userName, setUserName] = useState("catanacomics");
  const [userImage, setUserImage] = useState("assets/img/catanacomics.svg")

  function changeName(){
    const newName= prompt('Digite seu nome');

    if (!newName){
      alert('Digite um nome valido')
    } else {
      setUserName(newName);
    }
    
  }

  function changeImage(){
    const newImage= prompt('Digite a url da imagem');
    
    if (!newImage){
      alert('Digite uma url valido')
    } else {
      setUserImage(newImage);
    }

  }

  return (
    <div className="usuario">
      <img data-test="profile-image" onClick={changeImage} src={userImage} alt="imagem de perfil" />
      <div className="texto"data-test="name">
        <span>
          <strong>{userName}</strong>
          <ion-icon data-test="edit-name"onClick={changeName} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  )
}