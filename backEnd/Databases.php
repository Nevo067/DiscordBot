<?php
class DatabaseClass
{
    
    public function DbbConnection($bdd)
    {
        try
        {
            $login ="";
            $pass = "";
            $bdd = new PDO('mysql:host=localhost;dbname=test', $login, $pass);
        }
        catch(Exception $e)
        {
            die('Erreur : '.$e->getMessage());
        }
    }
    public function getDbbConnection()
    {
        try
        {
            $login ="";
            $pass = "";
            $bdd =new PDO('mysql:host=localhost;dbname=test', $login, $pass);
             /*
             $method=$bdd->prepare("select * from dialogue");
             $method->execute();
             */

             return $bdd;

        }
        catch(Exception $e)
        {
            die('Erreur : '.$e->getMessage());
        }
    }
}
