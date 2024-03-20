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
    public IActionResult List([FromQuery] DateOnly date) => Ok(_calendarEventService.GetCalendarEvents(date));

    [HttpPost]
    public IActionResult Create([FromBody] CreateCalendarEventRequest createCalendarEventRequest) => Created(string.Empty, _calendarEventService.CreateCalendarEvent(createCalendarEventRequest));
}