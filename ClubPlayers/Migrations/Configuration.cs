namespace ClubPlayers.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ClubPlayers.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ClubPlayers.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.

            context.Club.AddOrUpdate(x => x.Id,
                new Models.Club() { Id = 1, Name = "Crvena Zvezda", League = "ABA", YearClubWasFounded = 1945, NumOfWonTropheis = 1, ImagePath = AppDomain.CurrentDomain.BaseDirectory + @"Resources\ImageClub\Crvena_zvezda_logo.jpg" },
                new Models.Club() { Id = 2, Name = "Partizan", League = "ABA", YearClubWasFounded = 1945, NumOfWonTropheis = 6, ImagePath = AppDomain.CurrentDomain.BaseDirectory + @"Resources\ImageClub\Partizan_logo.jpg" }
            );

            context.Player.AddOrUpdate(x => x.Id,
                new Models.Player() { Id = 1, Fullname="Bogdan Bogdanovic", YearOfBirth=1992, NumOfMatchesForTheClub=23, AveragePoints=14, ImagePath = AppDomain.CurrentDomain.BaseDirectory + @"Resources\ImagePlayers\BB.jpg", ClubId=2 },
                new Models.Player() { Id = 2, Fullname = "Nikola Jokic", YearOfBirth = 1995, NumOfMatchesForTheClub = 25, AveragePoints = 17, ImagePath = AppDomain.CurrentDomain.BaseDirectory + @"Resources\ImagePlayers\NJ.jpg", ClubId = 1 },
                new Models.Player() { Id = 3, Fullname = "Nemanja Bjelica", YearOfBirth = 1988, NumOfMatchesForTheClub = 50, AveragePoints = 20, ImagePath = AppDomain.CurrentDomain.BaseDirectory + @"Resources\ImagePlayers\NB.jpg", ClubId = 1 }
            );
        } 
    }
}
