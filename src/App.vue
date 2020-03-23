<template>
  <div id="app">
    <div class="wrapper">
    <div class="sidebar">
        <router-link to="/">
          <img alt="SRL logo" src="./images/SRL-Logo02.png" width="180ph" height="70px">
        </router-link>
        <ul>
          <li >
            <div v-b-toggle.collapse-2>Cadastro</div>
            <b-collapse id="collapse-2">
              <div class="cards">
                <router-link to="/responsavel" >Responsável</router-link>
                <router-link to="/solicitante" >Solicitante</router-link>
                <router-link to="/participante" >Participante</router-link>
                <router-link to="/local" >Local</router-link>
                <router-link to="/departamento" >Departamento</router-link>
                <router-link to="/evento" >Evento</router-link>
                <router-link to="/produto" >Produto</router-link>
              </div>
            </b-collapse>
            </li>
          <li> Reserva </li>
          <li> Relatorios </li>
        </ul>
        <div class="about">
          <div>
            <router-link to="/sobre" >Sobre</router-link>
          </div>
      </div>
    </div>
    <router-view></router-view>
</div>
  </div>
</template>

<style lang="css">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

body{
  background-color: #f3f5f9;
}

.wrapper{
  display: flex;
  position: relative;
}

.wrapper .sidebar{
  width: 200px;
  height: 100%;
  background: #4b4276;
  padding: 30px 0px;
  position: fixed;
}

.wrapper .sidebar h2{
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
}

.wrapper .sidebar ul li{
  padding: 15px;
  border-bottom: 1px solid #bdb8d7;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  border-top: 1px solid rgba(255,255,255,0.05);
  color: white;
}

.wrapper .sidebar ul li a{
  color: #bdb8d7;
  display: block;
}
.cards {
  background-color: white;
  border-radius: 5px;
  display: table;
}
.cards a{
  width: 100%;
  padding: 0 15px;
}

.wrapper .sidebar ul li a .fas{
  width: 25px;
}
.wrapper .sidebar .cards {
  background-color: withe;
  color: #594f8d;
  font-size: 12pt;
  width: 100%;
}
.wrapper .sidebar .cards a:hover {
  color: rgba(7, 7, 7, 0.353)
}
.wrapper .sidebar .cards a {
  display: block;
  text-decoration: none;
  line-height: 45px;
  margin: 0 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #4b4276;
}
.wrapper .sidebar ul li:hover{
  background-color: #594f8d;
}

.wrapper .sidebar .about{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.wrapper .sidebar .about a{
  display: block;
  width: 40px;
  background: #594f8d;
  height: 40px;
  line-height: 45px;
  text-align: center;
  margin: 0 5px;
  color: #bdb8d7;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.wrapper .main_content{
  width: 100%;
  margin-left: 200px;
}

.wrapper .main_content .header{
  padding: 20px;
  background: #fff;
  color: #717171;
  border-bottom: 1px solid #e0e4e8;
}

.wrapper .main_content .info{
  margin: 20px;
  color: #717171;
  line-height: 25px;
}

.wrapper .main_content .info div{
  margin-bottom: 20px;
}

@media (max-height: 500px){
  .about{
    display: none !important;
  }
}
</style>
