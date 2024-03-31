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

    [HttpGet("{id}")]
    public IActionResult Get([FromRoute] string id)
    {
        var calendarEvent = _calendarEventService.GetCalendarEvent(id);

        return calendarEvent is NullCalendarEvent
            ? NotFound()
            : Ok(calendarEvent);
    }

    [HttpPost]
    public IActionResult Create([FromBody] CreateCalendarEventRequest createCalendarEventRequest) => Created(string.Empty, _calendarEventService.CreateCalendarEvent(createCalendarEventRequest));
}