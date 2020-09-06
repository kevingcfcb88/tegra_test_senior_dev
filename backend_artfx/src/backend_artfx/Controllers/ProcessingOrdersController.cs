using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend_artfx.Controllers
{
  [Route("api/[controller]")]
  [Produces("application/json")]
  [ApiController]
  public class ProcessingOrdersController : ControllerBase
  {
    public const string SessionKeyName = "_Name";

    [HttpGet]
    public IActionResult ListOrders()
    {
      return StatusCode(200, new { message = "List of orders" });
    }

    [HttpPost]
    public IActionResult ProcessOrders()
    {
      return StatusCode(200, new { message = "Processing Orders" });
    }
  }
}