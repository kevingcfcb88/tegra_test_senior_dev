<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use App\Service\Utils;
use App\Service\Orders;
use stdClass;

class ProcessOrdersController
{

  public function ProcessingOrder(Request $request, Utils $utils, Orders $orders)
  {
    $array = $utils->CsvToArray(file_get_contents($request->files->get('file')));
    $bAddingOrders = $orders->AddOrders($array);

    if ($bAddingOrders == true) {
      return new Response(json_encode(new stdClass), Response::HTTP_OK);
    }

    return new Response($bAddingOrders, Response::HTTP_BAD_REQUEST);
  }

  public function GetAllOrders(Orders $orders)
  {
    $aAllOrders = json_encode($orders->getAllOrders());
    return new Response($aAllOrders, Response::HTTP_OK, ['Content-Type' => 'application/json']);
  }

  public function AcceptOrders(Request $request, Utils $utils)
  {
    $jAcceptOrders = $utils->acceptOrders($request->getContent());
    if ($jAcceptOrders->getStatusCode() == 200) {
      return new Response($jAcceptOrders->getContent(), Response::HTTP_OK);
    }
    return new Response($jAcceptOrders->getContent(), Response::HTTP_BAD_REQUEST);
  }
}
