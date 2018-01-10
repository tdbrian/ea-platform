using EAPlatform.Utilities.Database;

namespace EAPlatform.Endpoints
{
    public class EndpointEntity : MongoDbEntityBase
    {
        public string Name { get; set; }

        public string Description { get; set; }
    }
}
