using DarkOrbit.Utilities.Database;

namespace DarkOrbit.Endpoints
{
    public class EndpointEntity : MongoDbEntityBase
    {
        public string Name { get; set; }

        public string Description { get; set; }
    }
}
