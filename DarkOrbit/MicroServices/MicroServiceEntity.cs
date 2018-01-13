using DarkOrbit.Utilities.Database;

namespace DarkOrbit.MicroServices
{
    public class MicroServiceEntity : MongoDbEntityBase
    {
        public string Name { get; set; }

        public string Description { get; set; }
    }
}
