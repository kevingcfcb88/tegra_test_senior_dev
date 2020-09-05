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

    [HttpGet]
    public IActionResult ListOrders()
    {
      return StatusCode(200, new { message = "Orders processed" });
    }

    [HttpPost]
    public IActionResult ProcessOrders([FromBody] int id)
    {
      if (id == 0)
      {
        return StatusCode(400, new { message = "Empty parameters" });
      }
      return StatusCode(200, new { message = "Orders processed" });
    }
  }
}