using ClubPlayers.Interface;
using ClubPlayers.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;

namespace ClubPlayers.Repository
{
    public class ClubRepository : IDisposable, IClubRepository
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public IEnumerable<Club> GetAll()
        {
            return db.Club;
        }

        public Club GetById(int id)
        {
            return db.Club.FirstOrDefault(k => k.Id == id);
        }

        public IEnumerable<Club> GetExtremi()
        {
            List<Club> extremi = new List<Club>();

            extremi.Add(db.Club.OrderBy(x => x.NumOfWonTropheis).First());
            extremi.Add(db.Club.OrderByDescending(x => x.NumOfWonTropheis).First());

            return extremi.OrderBy(x => x.NumOfWonTropheis);
        }


        public HttpResponseMessage GetClubImage(int id)
        {
            var fileName = "";
            var filePath = "";

            var dataSql = db.Club.FirstOrDefault(p => p.Id == id);

            filePath = dataSql.ImagePath;

            var result = new HttpResponseMessage(HttpStatusCode.OK);

            fileName = Path.GetFileName(filePath);

            if (string.IsNullOrWhiteSpace(filePath))
            {
                result.StatusCode = HttpStatusCode.NotFound;
            }
            else
            {
                var fileBytes = File.ReadAllBytes(filePath);

                var fileMemStream = new MemoryStream(fileBytes);

                result.Content = new StreamContent(fileMemStream);

                var headers = result.Content.Headers;

                headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                headers.ContentDisposition.FileName = fileName;
                var imgExt = fileName.Split('.');
                var contentType = "image/" + imgExt[1];

                headers.ContentType = new MediaTypeHeaderValue(contentType);

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