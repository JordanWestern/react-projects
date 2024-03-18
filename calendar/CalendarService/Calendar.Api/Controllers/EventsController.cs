using Calandar.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace Calendar.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventsController : ControllerBase
{
    [HttpPost]
    public ActionResult<IEnumerable<CalendarEvent>> GetEventsForDate([FromBody] DateOnly date) => Ok(DummyEvents(date));

    private static IEnumerable<CalendarEvent> DummyEvents(DateOnly date)
    {
        for (var i = 0; i < 10; i++)
        {
            yield return new CalendarEvent(
                Guid.NewGuid().ToString(),
                $"Event {i}",
                date.AddDays(i));
        }
    }
}