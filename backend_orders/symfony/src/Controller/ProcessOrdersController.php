<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use App\Service\Utils;

class ProcessOrdersController
{

  public function ProcessingOrder(Request $request, Utils $utils)
  {
    $array = $utils->CsvToArray(file_get_contents($request->files->get('file')));

    return new Response(print_r($array));
  }
}
