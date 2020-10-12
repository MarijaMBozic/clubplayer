using ClubPlayers.Interface;
using ClubPlayers.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;


namespace ClubPlayers.Repository
{
    public class PlayerRepository : IDisposable, IPlayerRepository
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public IEnumerable<Player> GetAll()
        {
            return db.Player.Include(b => b.Club).OrderByDescending(x => x.AveragePoints);
        }

        public Player GetById(int id)
        {
            return db.Player.Include(x => x.Club).FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<Player> GetByYearOfBirth(int yearOfBirth)
        {
            return db.Player.Include(x => x.Club).Where(x => x.YearOfBirth > yearOfBirth).OrderBy(x => x.YearOfBirth);
        }

        public IEnumerable<Player> GetBySearch(int least, int atMost)
        {
            return db.Player.Include(x => x.Club)
                     .Where(x => x.NumOfMatchesForTheClub > least && x.NumOfMatchesForTheClub < atMost)
                     .OrderByDescending(x => x.AveragePoints);
        }

        public void Add(Player basketballPlayer)
        {
            try
            {
                db.Player.Add(basketballPlayer);
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public void Update(Player basketballPlayer)
        {
            db.Entry(basketballPlayer).State = EntityState.Modified;
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
        }

        public void Delete(Player basketballPlayer)
        {
            db.Player.Remove(basketballPlayer);
            db.SaveChanges();
        }

        public void DeleteImage(int id)
        {
            var filePath = "";

            var dataSql = db.Player.FirstOrDefault(p => p.Id == id);

            filePath = dataSql.ImagePath;

            if (System.IO.File.Exists(filePath))
            {
                System.IO.File.Delete(filePath);
            }
        }

        public HttpResponseMessage GetFileImage(int id)
        {
            var fileName = "";
            var filePath = "";

            var dataSql = db.Player.FirstOrDefault(p => p.Id == id);

            filePath = dataSql.ImagePath;

            var result =
                new HttpResponseMessage(HttpStatusCode.OK);

            fileName = Path.GetFileName(filePath);

            if (string.IsNullOrWhiteSpace(filePath))
            {
                result.StatusCode = HttpStatusCode.NotFound;
            }
            else
            {
                var fileBytes = File.ReadAllBytes(filePath);

                var fileMemStream =
                    new MemoryStream(fileBytes);

                result.Content = new StreamContent(fileMemStream);

                var headers = result.Content.Headers;

                headers.ContentDisposition =
                    new ContentDispositionHeaderValue("attachment");
                headers.ContentDisposition.FileName = fileName;
                var imgExt = fileName.Split('.');
                var contentType = "image/" + imgExt[1];

                headers.ContentType =
                    new MediaTypeHeaderValue(contentType);

                headers.ContentLength = fileMemStream.Length;
            }

            return result;
        }

        protected void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (db != null)
                {
                    db.Dispose();
                    db = null;
                }
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

    }
}