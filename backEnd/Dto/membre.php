<?php

class membre
{
    private $idMember;
    private $login;
    private $mdp;


    public function __construct($idMember,$login,$mdp)
    {
        $this->idMember = $idMember;
        $this->login = $login;
        $this->mdp = $mdp;
    }


    /**
     * Get the value of idMember
     */ 
    public function getIdMember()
    {
        return $this->idMember;
    }

    /**
     * Set the value of idMember
     *
     * @return  self
     */ 
    public function setIdMember($idMember)
    {
        $this->idMember = $idMember;

        return $this;
    }

    /**
     * Get the value of login
     */ 
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * Set the value of login
     *
     * @return  self
     */ 
    public function setLogin($login)
    {
        $this->login = $login;

        return $this;
    }

    /**
     * Get the value of mdp
     */ 
    public function getMdp()
    {
        return $this->mdp;
    }

    /**
     * Set the value of mdp
     *
     * @return  self
     */ 
    public function setMdp($mdp)
    {
        $this->mdp = $mdp;

        return $this;
    }
}