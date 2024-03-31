using Calendar.Application.Contracts;
using Calendar.Application.Services;
using Microsoft.AspNetCore.Mvc;

namespace Calendar.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventsController : ControllerBase
{
    private readonly ICalendarEventService _calendarEventService;

    public EventsController(ICalendarEventService calendarEventService)
    {
        _calendarEventService = calendarEventService;
    }

    [HttpGet]
    public IActionResult List([FromQuery] int year, int month) => Ok(_calendarEventService.GetCalendarEvents(year, month));

    [HttpPost]
    public IActionResult Create([FromBody] CreateCalendarEventRequest createCalendarEventRequest) => Created(string.Empty, _calendarEventService.CreateCalendarEvent(createCalendarEventRequest));
}