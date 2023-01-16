<?php

    require_once(MODELS.'/travels.php');
    
    class ProductController
    {
        public function logout(){
            session_unset();
            header('location:'.BURL.'product/aff');
        }
        public function aff(){
            View::load('Login');
        }
        public function auth(){
            if (isset($_POST['submit'])){
                $data = array('email' => $_POST["email"] ,
                'password'=>$_POST["password"]); 
                $result = new user();
                $res=$result->login($data);
                // print_r($res);
            //     session_start();
            //     $_SESSION["email"] ="admin@gmail.com";
            //     echo "<pre>";
            //     var_dump($res);
            //     echo "</pre>";
                if( $res["email"] == $_POST['email'] && $res["password"] == $_POST['password']){
                    session_start();
                   $_SESSION['email']=$res["email"];
                   header('location: '.BURL.'Product/getAll');
                }else{
                    // Session::set('error','Email ou mot est incorrect ');
                   
                    View::load('login');
                }
            }
            else{
                echo"Error";
            }
        }
        public function homepg(){
            View::load("home");
        }
        public function home(){
            View::load("index");
        }
        public function tour(){
            $travel=new Travale();
            $data["travel"]=$travel->getAll();
            View::load("Tours",$data);
        }
        public function about(){
            View::load("about");
        }
        public function Contact(){
            View::load("Contact");
        }
        public function getAll()
        {
            // if(isset($_SESSION["login"]) && $_SESSION["login"]===true){
                    session_start();
                    if(isset($_SESSION["email"])){ 
                    $travel = new Travale();
                    $data['products'] = $travel->getAll();
                    View::load('Admin',$data);}
        }
        public function getform($id){
            
            $travel=new Travale();
            $data['pre']=$travel->element($id);
            // print_r($data);
            View::load('modifier',$data);
        }
        public function update($id){ 
            if(isset($_POST["submit"])){
                $data = array(
                    'image'=>$_FILES["file"],
                    'nom'=>$_POST["nom"],
                    'description'=>$_POST["des"],
                );
                $travele = new Travale();
                $travele->modifie($data,$id);
                header("location:".BURL."/product/getAll");
            }}
        public function formadd(){
            View::load('add');
        }
        public function add(){
            if(isset($_POST["submit"])){
               
                $data = array(
                    'image'=>$_FILES["files"],
                    'nom'=>$_POST["pr"],
                    'description'=>$_POST["qt"]);
                    $travel = new Travale();
                    $ter=$travel->addproduct($data);
                    echo "<br>";
                    var_dump($ter);
                    header('location: '.BURL.'Product/getAll');
            }
            
        }
        
        public  function delpdt($id){
            $travel = new Travale();
            $travel->del($id);
            header('location: '.BURL.'Product/getAll');
        }
    }
?>