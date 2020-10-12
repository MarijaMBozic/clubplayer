using ClubPlayers.Interface;
using ClubPlayers.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace ClubPlayers.Controllers
{
    public class PlayerController : ApiController
    {
        IPlayerRepository _repository { get; set; }

        private ApplicationDbContext db = new ApplicationDbContext();
        public PlayerController(IPlayerRepository repository)
        {
            _repository = repository;
        }
        public IEnumerable<Player> GetAll()
        {

            return _repository.GetAll();
        }
        public IHttpActionResult GetById(int id)
        {
            var player = _repository.GetById(id);
            var img = _repository.GetFileImage(id);
            if (player == null)
            {
                return NotFound();
            }
            return Ok(player);
        }

        public IHttpActionResult GetByYearOfBirth(int year)
        {
            var player = _repository.GetByYearOfBirth(year);
            if (player == null)
            {
                return NotFound();
            }
            return Ok(player);
        }

        [Route("api/search")]
        public IHttpActionResult PostBySearch(Search search)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (search.Least > search.AtMost)
            {
                return BadRequest("At least should not be greater than at most");
            }
            var players = _repository.GetBySearch(search.Least, search.AtMost);
            if (players == null)
            {
                return NotFound();
            }
            return Ok(players);
        }

        public async Task<IHttpActionResult> Post()
        {
            var ctx = HttpContext.Current;
            var root = AppDomain.CurrentDomain.BaseDirectory + @"Resources\ImagePlayers";
            var provider = new MultipartFormDataStreamProvider(root);
            var imgPath = string.Empty;

            try
            {
                await Request.Content.ReadAsMultipartAsync(provider);

                foreach (var file in provider.FileData)
                {
                    var name = file.Headers.ContentDisposition.FileName;

                    name = name.Trim('"');

                    var localImgName = file.LocalFileName;
                    imgPath = Path.Combine(root, name);
                    File.Move(localImgName, imgPath);

                }
            }
            catch
            {
                return BadRequest();
            }

            Player player = new Player
            {
                Fullname = HttpContext.Current.Request.Form["Fullname"],
                YearOfBirth = int.Parse(HttpContext.Current.Request.Form["YearOfBirth"]),
                NumOfMatchesForTheClub = int.Parse(HttpContext.Current.Request.Form["NumOfMatchesForTheClub"]),
                AveragePoints = decimal.Parse(HttpContext.Current.Request.Form["AveragePoints"]),
                ImagePath = imgPath,
                ClubId = int.Parse(HttpContext.Current.Request.Form["ClubId"]),

            };

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _repository.Add(player);

            return CreatedAtRoute("DefaultApi", new { id = player.Id }, player);
        }

        [Route("api/playerPhoto")]
        public HttpResponseMessage GetImage(int id)
        {
            return _repository.GetFileImage(id);
        }

        public IHttpActionResult Put(int? id, Player player)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != player.Id)
            {
                return BadRequest();
            }

            try
            {
                _repository.Update(player);
            }
            catch
            {
                return BadRequest();
            }

            return Ok(player);
        }

        public IHttpActionResult Delete(int id)
        {
            var player = _repository.GetById(id);
            if (player == null)
            {
                return NotFound();
            }
            _repository.DeleteImage(id);
            _repository.Delete(player);

            return Ok();
        }
    }
}
