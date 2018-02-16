class Map

  def initialize
    @map = []
  end

  def assign(key, value)
    if key_new?(key)
      @map << [key, value]
    else
      idx = lookup(key)
      @map[idx][1] = value
    end
  end

  def key_new?(key)
    counter = 0
    @map.each do |pair|
      counter += 1 if pair[0] == key
    end

    counter >= 1 ? false : true
  end

  def lookup(key)
    @map.each_with_index do |pair, index|
      return index if pair[0] == key
    end

    nil
  end

  def remove(key)
    idx = lookup(key)
    @map.delete_at(idx)
  end

  def show
    @map
  end

end
