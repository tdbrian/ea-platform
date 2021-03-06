﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace DarkOrbit.Endpoints
{
    [Route("api/[controller]")]
    public class EndpointsController : Controller
    {
        private readonly EndpointsMongo _endpointsRepo;

        public EndpointsController(EndpointsMongo microServicesRepo)
        {
            _endpointsRepo = microServicesRepo;
        }

        [HttpGet]
        public async Task<EndpointEntity> Get(ObjectId id)
        {
            return await _endpointsRepo.GetById(id);
        }

        [HttpGet("{id}")]
        public async Task<List<EndpointEntity>> Get()
        {
            return await _endpointsRepo.GetAll();
        }

        [HttpPost]
        public async Task Post([FromBody]EndpointEntity entity)
        {
            await _endpointsRepo.Create(entity);
        }

        [HttpPut("{id}")]
        public async Task Put([FromBody]EndpointEntity entity)
        {
            await _endpointsRepo.Update(entity);
        }

        [HttpDelete("{id}")]
        public async Task Delete(ObjectId id)
        {
            await _endpointsRepo.Remove(id, "nonamesyet");
        }
    }
}
