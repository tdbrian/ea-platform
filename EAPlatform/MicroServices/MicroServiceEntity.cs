using EAPlatform.Utilities.Database;

namespace EAPlatform.MicroServices
{
    public class MicroServiceEntity : MongoDbEntityBase
    {
        public string Name { get; set; }

        public string Description { get; set; }
    }
}
