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
    $aAllOrders = $this->session->get('aOrders');
    try {
      foreach ($aOrders as $order) {
        $order[count($order)] = "Pending";
        array_push($aAllOrders, $order);
      }
    } catch (Exception $e) {
      throw new Exception($e->getMessage());
    }
    $this->session->set('aOrders', $aAllOrders);
    return true;
  }
}
