<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', array(
            'base_dir' => realpath($this->container->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ));
    }

    /**
     * @Route("/json", name="homepage2")
     */
    public function jsonAction(Request $request)
    {
        $response =  new Response();
        $response->setContent(file_get_contents('https://apidemo.trackingpremium.us/publicapi/v1/search_username?username=trackingpremium'));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }    
}
