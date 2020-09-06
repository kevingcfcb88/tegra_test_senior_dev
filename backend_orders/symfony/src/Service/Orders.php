<?php

namespace App\Service;

use Exception;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class Orders
{
  private $session;

  function __construct(SessionInterface $session)
  {
    $this->session = $session;
    if ($this->session->get('aOrders', false) == false) {
      $this->session->set('aOrders', []);
    }
  }

  public function getAllOrders()
  {
    return $this->session->get('aOrders');
  }

  public function AddOrders($aOrders)
  {
    $getAllOrders = $this->session->get('aOrders');
    $aAllOrders = empty($getAllOrders) ? [] : json_decode($getAllOrders, true);
    $aOrders = json_decode($aOrders, true);
    try {
      foreach ($aOrders as $order) {
        $order["status"] = "Pending";
        array_push($aAllOrders, $order);
      }
    } catch (Exception $e) {
      throw new Exception($e->getMessage());
    }
    $this->session->set('aOrders', json_encode($aAllOrders));
    print_r($this->session->get('aOrders'));
    return true;
  }
}
