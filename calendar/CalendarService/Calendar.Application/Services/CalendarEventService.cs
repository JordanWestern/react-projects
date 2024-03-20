using Calendar.Application.Contracts;
using Calendar.Domain.Repositories;

namespace Calendar.Application.Services;

public class CalendarEventService : ICalendarEventService
{
    private readonly ICalendarEventsRepository _calendarEventsRepository;

    public CalendarEventService(ICalendarEventsRepository calendarEventsRepository)
    {
        _calendarEventsRepository = calendarEventsRepository;
    }

    public IEnumerable<CalendarEvent> GetCalendarEvents(DateOnly date)
    {
        var entities = _calendarEventsRepository.GetCalendarEvents(date);
        return entities.Select(entity => new CalendarEvent(entity.Id, entity.Name, entity.Date));
    }

    public CalendarEvent CreateCalendarEvent(CreateCalendarEventRequest createCalendarEventRequest)
    {
        var entity = Domain.Models.CalendarEvent.Create(createCalendarEventRequest.Name, createCalendarEventRequest.EventDate);
        _calendarEventsRepository.CreateCalendarEvent(entity);
        return new CalendarEvent(entity.Id, entity.Name, entity.Date);
    }
}