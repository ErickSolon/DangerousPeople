using System;
using backend.Controllers;
using backend.Data;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;

namespace backend.Test
{
    public class BackendTest
    {
        private PeopleController _PeopleController;
        private Mock<DataDbContext> _DataDbContext;

        [SetUp]
        public void Setup() {
            _DataDbContext = new();
            _PeopleController = new(_DataDbContext.Object);
    }

        [Test]
        public void DeveRetornarDadosFindAll() {
            var Pessoas = _PeopleController.FindAll();
            Assert.That(Pessoas, !Is.Null);
        }

        [Test]
        public void DeveRetornarDadosFindById()
        {
            var Pessoa =  _PeopleController.FindById(1);
            Assert.That(Pessoa, !Is.Null);
        }

        [Test] 
        public void DeveTerOTipoIActionResultFindById() {
            var Pessoa = _PeopleController.FindById(long.MinValue);
            Assert.That(Pessoa, Is.TypeOf<Task<IActionResult>>());
        }
    }
}
