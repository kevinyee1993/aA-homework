class LRUCache
  attr_reader :cache, :max

  def initialize(max = 4)
    @cache = []
    @max = max
  end

  def count
    cache.length
  end

  def add(el)
    if !cache.include?(el)
      cache << (el)
    elsif cache.include?(el)
      cache.delete(el)
      cache << (el)
    end

    cache.shift if cache.length > max
  end

  def show
    print cache
  end

  private
  # helper methods go here!

end

johnny_cache = LRUCache.new(4)

johnny_cache.add("I walk the line")
johnny_cache.add(5)

johnny_cache.count # => returns 2

johnny_cache.add([1,2,3])
johnny_cache.add(5)
johnny_cache.add(-5)
johnny_cache.add({a: 1, b: 2, c: 3})
johnny_cache.add([1,2,3,4])
johnny_cache.add("I walk the line")
johnny_cache.add(:ring_of_fire)
johnny_cache.add("I walk the line")
johnny_cache.add({a: 1, b: 2, c: 3})


johnny_cache.show
