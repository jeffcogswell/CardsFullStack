using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CardsFullStack.Models;

namespace CardsFullStack.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class CardsController : ControllerBase
	{
		[HttpGet("test")]
		public async Task<IEnumerable<Card>> runtest()
		{
			return await DAL.InitializeDeck();
		}
	}
}
