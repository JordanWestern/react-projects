
namespace Calendar.Domain.Models;

public class EventName
{
    private EventName(string name)
    {
        Value = name;
    }

    public string Value { get; }

    internal static EventName Create(string name)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(name, nameof(name));
        return new EventName(name);
    }

    public static implicit operator string(EventName eventName) => eventName.Value;
}
